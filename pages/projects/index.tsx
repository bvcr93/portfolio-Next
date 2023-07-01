// pages/projects/[id].tsx

import { useRouter } from 'next/router';

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)

  return (
    <div>
      <h1>Project Details - {id}</h1>
      {/* Add your project details content here */}
    </div>
  );
}
