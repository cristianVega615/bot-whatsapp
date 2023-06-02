import axios from "axios";

export async function getUrl() {
  const data = await axios("http://localhost:3164/api/base64");
    console.log(data.data)

    return data.data.base64
}

export default async function Img(){
  // const base = await getUrl() || "hola"
  const base = ""
  return <img src={"data:image/png;base64," + base} alt="" />;
}
