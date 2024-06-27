'use client';
import { useParams } from 'next/navigation';

export default function EditPage() {
  const {id} = useParams();
  console.log(id);
  return <div>Edit</div>;
}
