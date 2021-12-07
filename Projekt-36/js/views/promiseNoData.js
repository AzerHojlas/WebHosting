function promiseNoData(promise, data, error) {
  if (error) return <span>Some error</span>;
  if (!promise) return <span>No data</span>;
  if (!data)
    return <img src={"http://www.csc.kth.se/~cristi/loading.gif"}></img>;
  return null;
}
