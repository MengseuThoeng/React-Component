export default function FeedBack() {
  return (
    <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-base-100 dark:text-gray-100">
      <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
        <img
          src="https://source.unsplash.com/100x100/?portrait?1"
          alt=""
          className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Leroy Jenkins</h2>
          <span className="text-sm dark:text-gray-400">10/10 Store, I love this store so much. Highly Recommendend for those who want to buy the shoes</span>
        </div>
      </div>
    </div>
  );
}
