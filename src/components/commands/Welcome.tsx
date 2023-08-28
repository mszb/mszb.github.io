import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
      ______ ______  ___   _______ 
     / __/ // / __ \\/ _ | /  _/ _ )
    _\\ \\/ _  / /_/ / __ |_/ // _  |
   /___/_//_/\\____/_/ |_/___/____/ 
               ____  ___   _______   ___ 
              /_  / / _ | / __/ _ | / _ \\
               / /_/ __ |/ _// __ |/ , _/
              /___/_/ |_/_/ /_/ |_/_/|_| 
 

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ______ ______  ___   _______ 
    / __/ // / __ \\/ _ | /  _/ _ )
   _\\ \\/ _  / /_/ / __ |_/ // _  |
  /___/_//_/\\____/_/ |_/___/____/ 
  ____  ___   _______   ___ 
 /_  / / _ | / __/ _ | / _ \\
  / /_/ __ |/ _// __ |/ , _/
 /___/_/ |_/_/ /_/ |_/_/|_| 

          `}
          </PreNameMobile>
        </PreWrapper>
        <Seperator>----</Seperator>
        <div>
          Hello there! I am Shoaib Zafar. I'm thrilled to welcome you to my
          site.
        </div>
        <Seperator>----</Seperator>
        <div>
          You can view my profile on{" "}
          <Link
            target="_blank"
            href="https://www.upwork.com/freelancers/shoaibzafar11"
          >
            Upwork!
          </Link>{" "}
          Or{" "}
          <Link target="_blank" href="https://www.linkedin.com/in/mshoaibzafar">
            LinkedIn!
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`


 Fullstack | Python | Django | JavaScript

            .~!7??????77!~^.             
            ~J!..~????7777777~            
            ?J^  :???7777777!7:           
            !77!!7!!!77777!!!!:           
      .::::::::::::::~77!!!!!!: 7!!!~.    
  .!?JJJJJ??????77777!!!!!!!!:.@@@@@&P   
  .?JJ???????7777777!!!!!!!!!!..&&&&&&&G  
  !J???????7777777777!!!!!!!~: 5&&&&&&&&^ 
  ???????7777!^^:::::::::::::!B&&&&&&&&&J 
  ?????7777!.^YGBBBBBBBBBBB#&&&&&&&&&&&&J 
  ^??77777! J@@@@@@@&&&&&&&&&&&&&&&&&&&&: 
  !?77777~ &@&&&&&&&&&&&&&&&&&&&&&&&&&?  
    ^!7777^ &&&&&&&&&&&&&&&&&&&&&&&&#B!   
            &&&&&&&&&Y!7777777~......     
            &&&&&&&&&&&&&BGB&&J           
            #&&&&&&&&&&&B   G&?           
            :P&&&&&&&&&&&PJ5BJ            
              .^7J5PGGPPYJ!:
          `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
