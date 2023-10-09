import left from '../images/left.svg';
import right from '../images/right.svg';

const Blogpost = () => {

    const newsArray = [
        {
          title: "Breaking News: Major Earthquake Hits California",
          description: "A powerful earthquake with a magnitude of 7.5 struck California, causing widespread damage and panic.",
          date: "2023-04-10",
        },
        {
          title: "Tech Giant Launches New Smartphone ",
          description: "The leading tech company has unveiled its latest smartphone, promising groundbreaking innovations.",
          date: "2023-04-05",
        },
        {
          title: "Global Climate Summit Addresses Urgent Environmental Issues",
          description: "World leaders gather to discuss climate change and commit to ambitious goals for a sustainable future.",
          date: "2023-03-22",
        },
        {
          title: "Stock Market Soars to Record Highs Amid Economic Recovery",
          description: "Investors celebrate as the stock market continues its upward trajectory, driven by positive economic indicators.",
          date: "2023-03-15",
        },
        {
          title: "Space Exploration Milestone: First Human Mission to Mars Successful",
          description: "Astronauts return safely from Mars after a historic mission that opens new possibilities for space exploration.",
          date: "2023-03-08",
        },
        {
          title: "Entertainment News: Blockbuster Movie Breaks Box Office Records",
          description: "The latest blockbuster film becomes a box office sensation, surpassing all previous records.",
          date: "2023-02-28",
        },
        {
          title: "Health Breakthrough: Promising Vaccine Shows 95% Efficacy",
          description: "Scientists announce a highly effective vaccine that brings hope in the fight against a global pandemic.",
          date: "2023-02-15",
        },
        {
          title: "Sports Update: Team Wins Championship in Overtime Thriller",
          description: "In a thrilling championship game, the underdog team secures victory in overtime, shocking fans worldwide.",
          date: "2023-02-10",
        },
        {
          title: "Cultural Event: Annual Music Festival Returns with Star-Studded Lineup",
          description: "The renowned music festival is back, featuring top artists and promising unforgettable performances.",
          date: "2023-01-25",
        },
      ];
      
      // You can access individual news items like this:
      console.log(newsArray[0]);
      

    return ( 
        <>
        <div className=" mt-[98vh] md:mt-[4em] w-full px-4 md:px-12 lg:px-16 my-[2.5em] md:my-[4em]">
            <p className=" font-Lora text-xl md:text-2xl font-semibold">Recent Blog posts</p>
            <div className=" mt-[2em] w-full flex flex-col md:flex-row justify-between">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] lg:gap-[3%]">
                {newsArray.map((newsItem, index) => (
                    <div key={index} className="w-full">
                    <div className="w-full h-[260px] md:h-[280px] rounded-[20px] bg-[#D1A186]"></div>
                    <div className="mt-[1em] w-full space-y-2">
                        <div className="h-[3.5em] md:h-[5em] w-full"> {/* Fixed height container */}
                        <p className="font-Lora text-xl md:text-xl font-semibold">{newsItem.title}</p>
                        </div>
                        <div className="h-[5em] w-full"> {/* Fixed height container */}
                        <p className="font-Lora font-normal text-base">{newsItem.description}</p>
                        </div>
                        <div className="h-[1.5em] w-full flex items-center"> {/* Fixed height container with center-aligned date */}
                        <p className="font-Lora font-medium text-base">{newsItem.date}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <div className=" mt-[3.5em] md:mt-[8em] flex w-full justify-center items-center">
                <div className=" h-[40px] w-full md:w-[369px] border-y rounded-[25px] border-[#DAE0E6] flex justify-between">
                    <button className=" w-[80px] h-full border-x border-[#DAE0E6] rounded-l-[25px] flex justify-center items-center">
                        <img src={ left } alt="" />
                        <p className=" font-Lora text-[#5F6D7E] font-medium text-sm">Prev</p>
                    </button>
                    <button className=" w-[80px] h-full border-x border-[#DAE0E6] rounded-r-[25px] flex justify-center items-center">
                        <p className=" font-Lora text-[#5F6D7E] font-medium text-sm">Next</p>
                        <img src={ right } alt="" />
                    </button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Blogpost;