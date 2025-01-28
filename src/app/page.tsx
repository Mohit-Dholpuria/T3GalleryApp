import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = ['https://dummyimage.com/400x300/00ff00/000',
  'https://dummyimage.com/400x300/00ff00/000',
  'https://dummyimage.com/400x300/00ff00/000',
  'https://dummyimage.com/400x300/00ff00/000',
  'https://dummyimage.com/400x300/00ff00/000',
  'https://dummyimage.com/400x300/00ff00/000',
]

const mockData = mockUrls.map((url,index)=>({
  id:index+1,
  url
}))



export default async function  HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(111111111,db);
  return (<> <div className="flex flex-wrap gap-4 justify-center">
    {mockData.map((image) =>(
      <div key={image.id}>
      <img src={image.url} />
      </div>
    ))}
  </div>
  {posts.map((post)=>(<div key={post.id}>{post.name}</div>))}

  </>
   
  );
}
