"use client";
import { Context } from '@/contextapi/ContextProvider';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const Page = () => {
  const { posts, setNextPost, approvePosts } = useContext(Context);
  const router = useRouter();

  const handleEdit = (uid, index) => {
    const currentIndex = approvePosts.indexOf(posts[index]);
    if (currentIndex === -1) {
      setNextPost(0);
    } else {
      setNextPost(currentIndex + 1);
    }

    router.push(`/dashboard/posts/${uid}`);
  };

  return (
    <section>
      <div className="py-3 border-t border-b border-white text-center mb-10">
        <h2 className="inline-block text-2xl text-white">All Videos</h2>
      </div>

      <div className="px-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-secondary uppercase bg-black">
              <tr>
                <th scope="col" className="px-6 py-3">UID</th>
                <th scope="col" className="px-6 py-3 hidden sm:table-cell">Title</th>
                <th scope="col" className="px-6 py-3 hidden sm:table-cell">Comments</th>
                <th scope="col" className="px-6 py-3 hidden sm:table-cell">Likes</th>
                <th scope="col" className="px-6 py-3">Approved</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts &&
                posts.map((data, index) => (
                  <tr
                    key={data.uid}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {/* Conditionally render first 2 characters for small screens and full UID for larger screens */}
                      <span className="block sm:hidden">{data.uid.substring(0, 2)}</span>
                      <span className="hidden sm:block">{data.uid}</span>
                    </th>
                    <td className="px-6 py-4 hidden sm:table-cell">{data.description}</td>
                    <td className="px-6 py-4 hidden sm:table-cell">{data.commentsCount}</td>
                    <td className="px-6 py-4 hidden sm:table-cell">{data.likesCount}</td>
                    <td className="px-6 py-4">
                      {data.approved ? (
                        <span className="text-green-500">&#10004;</span>
                      ) : (
                        <span className="text-red-500">&#10006;</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleEdit(data.uid, index)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Page;
