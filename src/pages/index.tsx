import Link from 'next/link';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

const VideoWrapper = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

export default function Home() {
	return (
		<MainContainer>
			<Header />
			<ContentSection>
				<TextContent>
					<h1>Welcome to our website!</h1>
					<p>This is the main page. Enjoy our content and don’t hesitate to reach out.</p>
					<Link href="/contact" passHref>
						<button>Contact Us</button>
					</Link>
				</TextContent>
				<VideoWrapper>
					<LiteYouTubeEmbed id="dQw4w9WgXcQ" title="Embedded YouTube Video" />
				</VideoWrapper>
			</ContentSection>
			<Footer />
		</MainContainer>
	);
}
