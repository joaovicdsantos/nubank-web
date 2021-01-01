import { RewardsContainer } from './styles';
import Content from '../../components/Content';
import TitleLink from '../../components/TitleLink';
import Title from '../../components/Title';
import Link from '../../components/Link';
import Banner from '../../components/Banner';

import rewardsImg from './rewards.png';

const Rewards = () => {
	return (
		<RewardsContainer>
			<div className="container">
				<div className="row">
					<Content>
						<TitleLink light>Rewards</TitleLink>
						<Title>Um programa de pontos justo e fácil de usar.</Title>
						<Link inverted>Saiba mais</Link>
					</Content>
				</div>
			</div>
			<Banner src={ rewardsImg } />
		</RewardsContainer>
	)
}

export default Rewards;
