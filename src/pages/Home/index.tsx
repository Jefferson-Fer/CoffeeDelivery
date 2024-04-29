import { BannerIntro } from './BannerIntro'
import {
  SectionCard,
  HomeContainer,
  HomeContent,
  HomeContentHeader,
} from './styles'
import { listCoffees } from '../../../data.json'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <HomeContainer>
      <BannerIntro />
      <HomeContent>
        <HomeContentHeader>
          <h3>Nossos cafés</h3>
        </HomeContentHeader>
        <SectionCard>
          {listCoffees.map((coffee) => {
            return <Card key={coffee.id} coffee={coffee} />
          })}
        </SectionCard>
      </HomeContent>
    </HomeContainer>
  )
}
