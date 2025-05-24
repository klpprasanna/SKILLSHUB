import { useState } from 'react';
import axios from 'axios';

export default function UploadCourse() {
  const [course, setCourse] = useState({ title: '', description: '', price: 0, content: [] });

  const handleUpload = async () => {
    await axios.post('/api/courses', course);
    alert('Course uploaded!');
  };

  return (
    <div>
      <input placeholder="Title" onChange={e => setCourse({ ...course, title: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setCourse({ ...course, description: e.target.value })} />
      <input type="number" placeholder="Price" onChange={e => setCourse({ ...course, price: +e.target.value })} />
      <button onClick={handleUpload}>Upload Course</button>
    </div>
  );
}
