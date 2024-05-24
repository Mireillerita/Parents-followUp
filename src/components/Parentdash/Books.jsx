import React from 'react';
const Books = () => {
  // Sample data
  
  const books = [
    { id: 1, title: 'English', author: 'DR.jisele', imageUrl: 'https://mtgpublicwp.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/05/08113438/2023_learning_eng_cl1_9789355553430.jpg' },
    { id: 2, title: 'Physics', author: 'Sandrine', imageUrl: 'https://m.media-amazon.com/images/I/71zIDc0j0OL._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, title: 'Learning Kinyarwanda', author: 'Mirreilee', imageUrl: 'https://cdn4.volusion.store/sa2d6-yjek4/v/vspfiles/photos/categories/196649.jpg?v-cache=1700777962' },
    { id: 2, title: 'cartoon', author: 'rebbek', imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-book-cartoon-illustration_52683-130773.jpg' },
    { id: 1, title: 'English', author: 'DR.jisele', imageUrl: 'https://mtgpublicwp.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/05/08113438/2023_learning_eng_cl1_9789355553430.jpg' },
    { id: 2, title: 'Physics', author: 'Sandrine', imageUrl: 'https://m.media-amazon.com/images/I/71zIDc0j0OL._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, title: 'Learning Kinyarwanda', author: 'Mirreilee', imageUrl: 'https://cdn4.volusion.store/sa2d6-yjek4/v/vspfiles/photos/categories/196649.jpg?v-cache=1700777962' },
    { id: 2, title: 'cartoon', author: 'rebbek', imageUrl: 'https://img.freepik.com/free-vector/hand-drawn-book-cartoon-illustration_52683-130773.jpg' },
    // Add mor
    // Add more books as needed
  ];
  

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {books.map((book) => (
        <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:-translate-y-1 hover:shadow-lg w-64">
          <img className="w-full h-48 object-cover" src={book.imageUrl} alt={book.title} />
          <div className="p-6">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p className="mt-2 text-gray-600">{book.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;