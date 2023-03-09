export const fetchApi = async (url)=>{
  try{
  const req = await fetch(url)
  const data = await req.json()
  console.log(data)
  return data
  } catch(error){
    console.log(error)
  }
};
export default fetchApi;