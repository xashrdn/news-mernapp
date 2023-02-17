const Lifestyle = () => {
    return <div className="flex justify-center mt-[5px]">
    <div className="flex flex-col mr-8">
      <div className="flex">
        <p className="mr-[70vw] font-sans-serif text-red-400 text-2xl">Sports</p>
        <button className="bg-red-400 hover:opacity-60 mr-2 w-6 h-6 mt-2" type="button">←</button>
        <button className="bg-red-400 hover:opacity-60 w-6 h-6 mt-2" type="button">→</button>
      </div>
      <div className="h-[3px] w-full bg-red-400 mt-3"></div>
      <div className="flex">
        <div className="w-[440px]">
          <img className="w-[440px] h-[250px] mt-[41px]" src="pelje.JPG" alt="" />
          <div className="flex mt-[25px] text-[12px]">Craig Bator - <span className="opacity-60">27 Dec 2020</span></div>
          <div className="font-sans-serif text-[18px] mt-[12px] leading-7">Solskjaer dismisses Klopp comments on Man Utd penalty record</div>
          <div className="mt-[14px] opacity-60 text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero porro nesciunt reiciendis omnis? Ipsam ab, magni ipsum quidem incidunt consectetur, laborum quo qui unde consequuntur dolorum natus? Quaerat, hic omnis.</div>
        </div>
        <div className="flex flex-col mt-[41px]">
          <div className="ml-[30px] flex flex-col">
            <div className="flex mb-[17px] w-[400px]">
              <img className="w-[90px] h-[70px]" src="pelje.JPG" alt="" />
              <div className="ml-[14px]">
                <div className="text-[10px]">Craig Bator - <span className="opacity-60">27 Dec 2020</span></div>
                <div className="text-[15px]">South Africa hammer injury-hit Sri Lanka Player</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      d
    </div>
  </div>
}
export default Lifestyle;