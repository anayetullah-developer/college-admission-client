const Gallery = () => {
  const images = [
    'https://i.ibb.co/wrjcbpM/cottage-g24ed81b21-640.jpg',
    'https://i.ibb.co/P452YSL/house-g87f1a784d-640.jpg',
    'https://i.ibb.co/9YcWSs8/vw-beetle-g96eb55f78-640.jpg',
    // Add more image paths as needed
  ];

  return (
    <div className="grid gap-4 grid-cols-3">
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden cursor-pointer">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-black text-white text-center px-4 py-2 rounded">
                Image
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
