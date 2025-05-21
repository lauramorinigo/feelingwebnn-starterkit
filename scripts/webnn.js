export async function inferSentimentWebNN(sentimentScore) {
  if (!navigator.ml) {
    console.warn('WebNN is not supported in this browser.');
    return sentimentScore;
  }

  /* return sentimentScore * 1.5 */
  
  // Step 0: Create a context and builder
  const context = await navigator.ml.createContext({ deviceType: 'cpu' });
  const builder = new MLGraphBuilder(context);

  // Step 1: Create input tensor descriptor
  const inputDesc = {
    dataType: 'float32',
    dimensions: [1, 1],
    shape: [1, 1],
  };

  // Step 2: Create input operand
  const input = builder.input('input', inputDesc);

  // Step 3: Create a constant weight tensor (example: multiply input by 1.5)
  const weightDesc = {
    dataType: 'float32',
    dimensions: [1, 1],
    shape: [1, 1],
  };
  const weight = builder.constant(weightDesc, new Float32Array([1.5]));

  // Step 4: Define computation (simple multiply)
  const output = builder.mul(input, weight);

  // Step 5: Build the graph
  const graph = await builder.build({ output });

  // Step 6: Create input/output tensors
  const inputTensorDesc = {
    dataType: 'float32',
    dimensions: [1, 1],
    shape: [1, 1],
    usage: GPUBufferUsage.STORAGE || 1, // fallback
    writable: true,
  };
  const outputTensorDesc = {
    dataType: 'float32',
    dimensions: [1, 1],
    shape: [1, 1],
    usage: GPUBufferUsage.STORAGE || 2,
    readable: true,
  };

  const inputTensor = await context.createTensor(inputTensorDesc);
  const outputTensor = await context.createTensor(outputTensorDesc);

  const inputBuffer = new Float32Array([sentimentScore]);
  context.writeTensor(inputTensor, inputBuffer);

  // Step 7: Run inference
  await context.dispatch(graph, { input: inputTensor }, { output: outputTensor });

  // Step 8: Read the output
  const resultBuffer = await context.readTensor(outputTensor);
  return new Float32Array(resultBuffer)[0];
}
