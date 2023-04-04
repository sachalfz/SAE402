const HeroBanner = () => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row py-16 md:py-32">
        <div className="md:w-1/2 text-center items-center md:items-start md:text-left flex flex-col gap-3 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Labyrinthe du tri</h1>
          <p className="text-xl md:text-2xl text-gray-400 ">Jeux intéractif en réalité virtuelle au sein d'un labyrinthe</p>
          <a href='#' className="bg-white hover:bg-gray-300 hover:transition-all transition-all text-gray-800 font-semibold rounded w-max px-8 py-4 mt-8 justify-self-end">Tester le jeu</a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 ">
          <img src="https://picsum.photos/1920/1080" alt="Hero" className="rounded-md shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;