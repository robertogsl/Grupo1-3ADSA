import feedbackCleanner from '../../../assets/feedback-cleanner.png';
import starSVG from '../../../assets/star.svg';

import { Container, Content, CardFeedback } from './styles';

interface IStaticFeedbacks {
    name: string;
    stars: number;
    works: number;
    since: number;
}

const staticFeedbacks: IStaticFeedbacks[] = [
    {
        name: "Maria",
        stars: 4,
        works: 39,
        since: 2017
    },
    {
        name: "Dulce",
        stars: 5,
        works: 78,
        since: 2019
    },
    {
        name: "Célia",
        stars: 2,
        works: 21,
        since: 2020
    },
    {
        name: "Dolores",
        stars: 3,
        works: 7,
        since: 2021
    },
]

export function Feedbacks() {
    return (
        <Container>
            <Content>
                <h1>Feedbacks</h1>
                <ul>
                    {staticFeedbacks.map(feedback => (
                        <CardFeedback>
                            <img src={feedbackCleanner} alt="Doméstica feedback" />
                            <strong>{feedback.name}</strong>

                            <div>
                                {Array.from({ length: feedback.stars }).map(() => (
                                    <img src={starSVG} alt="Estrela" />
                                ))}
                            </div>
                            <span>{feedback.works} trabalhos realizados</span>
                            <span>Desde {feedback.since}</span>
                        </CardFeedback>
                    ))}
                </ul>
            </Content>
        </Container>
    )
}
