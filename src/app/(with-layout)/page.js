import image1 from "@/assets/image.jpg"
import Image from 'next/image'

const HomePage = () => {
  return (
    <main>
    <h2>Home</h2>
    {/*image import from local folder  */}
    {/* <Image width={600}  src={image1} alt='image'></Image> */}


    {/* image import from local folder directly into src attribute */}
    {/* <Image width={600}  src="/image.jpg" alt='image'></Image> */}


    {/* image import from website . Here we need to configure next.config.js file  */}
    {/* <Image width={600} height={400}  src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt='image'></Image> */}

    {/* placeholder in image  */}
    <Image width={600}  src={image1} placeholder="blur" alt='image'></Image>
    </main>
  )
}
export default HomePage;
