import { Format, Content, Button } from "./styles";
import CardGeneric from "../CardGeneric";
import starSVG from "../../assets/star.svg";
import Profile from "../../assets/Group.svg";
import { FaCircle } from "react-icons/fa";

interface ISdescProfile {
  src: string;
  name: string;
  star: number;
  praise: number;
  icon: () => JSX.Element;
}

const descService: ISdescProfile[] = [
  {
    src: Profile,
    name: "Maria das Dores",
    star: 5,
    praise: 3,
    icon: () => <FaCircle size={20} color="#FFF" />,
  },
];

export function InviteForService() {
  return (
    <CardGeneric>
      <Content>
        {descService.map((profile) => (
          <Format>
            <img src={profile.src} alt="" />
            <p>{profile.name}</p>
            <div>
              {Array.from({ length: profile.star }).map(() => (
                <img src={starSVG} alt="Estrela" />
              ))}
            </div>
            <div>
              {Array.from({ length: profile.praise }).map(() => (
                <FaCircle size={50} color="#FFF" />
              ))}
            </div>
            <span>
              <p>Principais habilidades: </p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              quasi magni adipisci quod! Recusandae architecto aliquid, provident porro sed esse aliquam cum voluptates.
            </span>
          </Format>
        ))}
        <Button>
          <button>Convidar para o serviço</button>
        </Button>
      </Content>
    </CardGeneric>
  );
}
