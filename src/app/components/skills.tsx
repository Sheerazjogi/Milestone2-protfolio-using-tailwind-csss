export default function Skills(){
    return(
        <section className="skills min-h-screen py-8 px-[5%] border-b-2 border-[#00ADB5]" id="skills">
    <h2 className="text-[2.25rem] font-bold mt-[60px] text-center">My <span className="text-[#00ADB5]">Projects</span></h2>

      <div className="skillRow">
        <div className="skillColumn">
          <h3 className="title">Technical Skills</h3>

          <div className="skillSec">
            <div className="skillContent">
              <div className="progress">
                <h3>Typescript <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>HTML <span>95%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>CSS <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Javascript <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Python <span>50%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Bootstrap <span>75%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="skillColumn">
          <h3 className="title">Non-Technical Skills</h3>

          <div className="skillSec">
            <div className="skillContent">
              <div className="progress">
                <h3>Communication Skills <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Teamwork Skill <span>80%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Decision-making <span>70%</span></h3>
                <div className="bar"><span></span></div>
              </div>

              <div className="progress">
                <h3>Creativity <span>90%</span></h3>
                <div className="bar"><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}