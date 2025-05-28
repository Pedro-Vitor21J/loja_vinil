import { vinyl_info } from '../app/components/model/vinyl-info';
import { vinyl } from "../app/components/model/vinyl";
import { vinyl_seller } from '../app/components/model/vinyl-seller';
import { vinyl_other_info } from '../app/components/model/vinyl-other-info';

export const vinyl_mock: vinyl[] = [
    {
        id: '1',
        imageUrl: 'https://i.discogs.com/ATLGAosI0De2OkAodnJYs4D9kGRkLgcCXBtMwcOWQ4E/rs:fit/g:sm/q:90/h:573/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNTM4/MDUzLTE1MzczMTA5/MTEtODA2Ni5qcGVn.jpeg',
        title: 'Year of the Snitch',
        artist: 'Death Grips',
        price: 'R$ 126,57',
    },

    {
        id: '2',
        imageUrl: 'https://i.discogs.com/86Et-mMsyv4fQFEU7PydJE3G3s2gXOga4YIqkGRky6s/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjAw/MjM4LTE2MDUyNjk3/MDMtMjg5NS5qcGVn.jpeg',
        title: 'Amplifier Worship',
        artist: 'Boris',
        price: 'R$ 130,54',
    },

    {
        id: '3',
        imageUrl: 'https://i.discogs.com/ytQGzdHvEGjnWr3PEX36iaDeBpwRg0QhXT830ml9HHs/rs:fit/g:sm/q:90/h:584/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0MjYw/LTE2MDI0MTM5NTIt/OTc1Ni5qcGVn.jpeg',
        title: 'Lift Your Skinny Fist...',
        artist: 'Godspeed You! Black Emperor',
        price: 'R$ 141,89',
    },

    {
        id: '4',
        imageUrl: 'https://i.discogs.com/GpvJnKA7sVgWqi_4M_ZNIc_uvTJVolS5Vk1JIH93RB0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MjYz/MjgtMTU0NjkyNjgw/OC0xNDcwLmpwZWc.jpeg',
        title: 'Jane Doe',
        artist: 'Converge',
        price: 'R$ 1.135,12',
    },

    {
        id: '5',
        imageUrl: 'https://i.discogs.com/et1xQFBrflXxHmD9aQseCqz8joFbyQJm55cNaBC8IIk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2OTAw/OTAtMTYwNzMwMzIw/Mi0yNzE5LmpwZWc.jpeg',
        title: 'To Be Kind',
        artist: 'Swans',
        price: 'R$ 198,08',
    },

    {
        id: '6',
        imageUrl: 'https://i.discogs.com/IZ_duZiWeqpXB0kHH71LNodDec-aQFlj6BvViHWAWgM/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NzI0/NTk4LTE2MjgyMzI3/NjAtOTIzMi5qcGVn.jpeg',
        title: 'MM..FOOD',
        artist: 'MF DOOM',
        price: 'R$ 164,54',
    },

    {
        id: '7',
        imageUrl: 'https://i.discogs.com/LEqjpbKpjk4fWFxNM0PCaIw0vBJXm2-3L8IqCSz64P8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NjMz/NTEzLTE1OTYyMDc2/NjEtNjY5Mi5qcGVn.jpeg',
        title: '1000 gecs and the Tree of Clues',
        artist: '100 Gecs',
        price: 'R$ 141,55',
    },

    {
        id: '8',
        imageUrl: 'https://i.discogs.com/zNHSS_l_J_BKBRLfGbe4HdSzJYUfzuoDZ0Eq2XiNZyo/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NTQ4/ODE3LTE1Nzg2MDY0/NTctNjIxOS5qcGVn.jpeg',
        title: 'The Sacrificial Code',
        artist: 'Kali Malone',
        price: 'R$ 505,13',
    },

    {
        id: '9',
        imageUrl: 'https://i.discogs.com/DbFkeom4Di6YH9X5VHrDUyvUIYKBJYkpVycRbL6d6ms/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjg4/ODM3LTE1NTE1MzU1/ODMtOTEyMC5qcGVn.jpeg',
        title: 'Venereology',
        artist: 'Merzbow',
        price: 'R$ 851,28',
    },

    {
        id: '10',
        imageUrl: 'https://i.discogs.com/p3gQXkNVB-b2kFrpNImZIP1mdU6xnWLxQRhBF_QtmZM/rs:fit/g:sm/q:90/h:607/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyOTc5/ODQtMTU0OTg2MTA3/Mi05MTc1LmpwZWc.jpeg',
        title: 'Frozen Niagara Falls',
        artist: 'Prurient',
        price: 'R$ 221,35',
    },

    {
        id: '11',
        imageUrl: 'https://i.discogs.com/6icxFPKdCe3U0QEbdHMJsT4rXtu9OwTBb1_rO1ClWcU/rs:fit/g:sm/q:90/h:598/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNzA3/NjM1LTE2MjMyODcy/NzMtNTA2NS5qcGVn.jpeg',
        title: 'You Wont Get What Yo...',
        artist: 'Daughters',
        price: 'R$ 180,71',
    },

    {
        id: '12',
        imageUrl: 'https://i.discogs.com/99YwHQzkorFk1W2LkrfctB32EOu86SdPwB0vPJLeQ34/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NDg3/MDYtMTY2NzAzMDYz/MS0xODM3LmpwZWc.jpeg',
        title: 'Sheer Hellish Miasma',
        artist: 'Kevin Drumm',
        price: 'R$ 579,76',
    },

    {
        id: '13',
        imageUrl: 'https://i.discogs.com/Sp-Bh705bUUXv6BoOJiW5hGeKNKJ27E4qZqvAu5PKKU/rs:fit/g:sm/q:90/h:609/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MzM1/ODA1LTE2Njc5NDIx/MzYtMjkyMS5qcGVn.jpeg',
        title: 'Deathconsciousness',
        artist: 'Have a Nice Life',
        price: 'R$ 396,33',
    },

    {
        id: '14',
        imageUrl: 'https://i.discogs.com/KUUZ7YnfuzaIRAxtLVXz5CQrNtJaY9wxNID3_uKKkVs/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NTYw/My0xNjg0ODk2MTA0/LTM1NTAuanBlZw.jpeg',
        title: 'Hanatarash 3',
        artist: 'Hanatarash',
        price: 'R$ 936,47',
    },

    {
        id: '15',
        imageUrl: 'https://i.discogs.com/QUsBq0Mmu-J6-sh7hHL7K6ZxdrtMkYN8h9j9W6ErFCo/rs:fit/g:sm/q:90/h:450/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyOTEw/MS0xMTQwNjI1NTI0/LmpwZWc.jpeg',
        title: 'Black One',
        artist: 'Sunn O)))',
        price: 'R$ 441,39',
    },

    {
        id: '16',
        imageUrl: 'https://i.discogs.com/ma9No1pg9ILxRVN1y9nU-ybVmdStPjlNXLh7Qi4rOLw/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5MTUx/Mi0xNDM4MjU0MzM4/LTEwMDEuanBlZw.jpeg',
        title: 'Black Vase',
        artist: 'Prurient',
        price: 'R$ 479,85',
    },
]

export const vinyl_info_mock: vinyl_info[] = [
    {
        id: '1',
        imageUrl: 'https://i.discogs.com/ATLGAosI0De2OkAodnJYs4D9kGRkLgcCXBtMwcOWQ4E/rs:fit/g:sm/q:90/h:573/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNTM4/MDUzLTE1MzczMTA5/MTEtODA2Ni5qcGVn.jpeg',
        title: 'Year of the Snitch',
        artist: 'Death Grips',
        price: '126,57',
        format: 'LP',
        genre: 'Experimental Hip Hop',
        style: 'Industrial Hip Hop, Experimental',
        quantDisc: '1',
        color: 'Preto',
        Release: '2018'
    },
    {
        id: '2',
        imageUrl: 'https://i.discogs.com/86Et-mMsyv4fQFEU7PydJE3G3s2gXOga4YIqkGRky6s/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjAw/MjM4LTE2MDUyNjk3/MDMtMjg5NS5qcGVn.jpeg',
        title: 'Amplifier Worship',
        artist: 'Boris',
        price: '130,54',
        format: 'LP',
        genre: 'Rock',
        style: 'Drone Metal, Noise Rock',
        quantDisc: '1',
        color: 'Preto',
        Release: '1998'
    },
    {
        id: '3',
        imageUrl: 'https://i.discogs.com/ytQGzdHvEGjnWr3PEX36iaDeBpwRg0QhXT830ml9HHs/rs:fit/g:sm/q:90/h:584/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0MjYw/LTE2MDI0MTM5NTIt/OTc1Ni5qcGVn.jpeg',
        title: 'Lift Your Skinny Fist...',
        artist: 'Godspeed You! Black Emperor',
        price: '141,89',
        format: '2xLP',
        genre: 'Rock',
        style: 'Post-Rock, Experimental',
        quantDisc: '2',
        color: 'Preto',
        Release: '2000'
    },
    {
        id: '4',
        imageUrl: 'https://i.discogs.com/GpvJnKA7sVgWqi_4M_ZNIc_uvTJVolS5Vk1JIH93RB0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MjYz/MjgtMTU0NjkyNjgw/OC0xNDcwLmpwZWc.jpeg',
        title: 'Jane Doe',
        artist: 'Converge',
        price: '1.135,12',
        format: 'LP',
        genre: 'Rock',
        style: 'Metalcore, Hardcore',
        quantDisc: '1',
        color: 'Preto',
        Release: '2001'
    },
    {
        id: '5',
        imageUrl: 'https://i.discogs.com/et1xQFBrflXxHmD9aQseCqz8joFbyQJm55cNaBC8IIk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2OTAw/OTAtMTYwNzMwMzIw/Mi0yNzE5LmpwZWc.jpeg',
        title: 'To Be Kind',
        artist: 'Swans',
        price: '198,08',
        format: '3xLP',
        genre: 'Rock',
        style: 'Experimental Rock, Post-Rock',
        quantDisc: '3',
        color: 'Preto',
        Release: '2014'
    },
    {
        id: '6',
        imageUrl: 'https://i.discogs.com/IZ_duZiWeqpXB0kHH71LNodDec-aQFlj6BvViHWAWgM/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NzI0/NTk4LTE2MjgyMzI3/NjAtOTIzMi5qcGVn.jpeg',
        title: 'MM..FOOD',
        artist: 'MF DOOM',
        price: '164,54',
        format: '2xLP',
        genre: 'Hip Hop',
        style: 'Abstract Hip Hop',
        quantDisc: '2',
        color: 'Preto',
        Release: '2004'
    },
    {
        id: '7',
        imageUrl: 'https://i.discogs.com/LEqjpbKpjk4fWFxNM0PCaIw0vBJXm2-3L8IqCSz64P8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NjMz/NTEzLTE1OTYyMDc2/NjEtNjY5Mi5qcGVn.jpeg',
        title: '1000 gecs and the Tree of Clues',
        artist: '100 Gecs',
        price: '141,55',
        format: 'LP',
        genre: 'Electronic',
        style: 'Hyperpop, Experimental',
        quantDisc: '1',
        color: 'Colorido',
        Release: '2020'
    },
    {
        id: '8',
        imageUrl: 'https://i.discogs.com/zNHSS_l_J_BKBRLfGbe4HdSzJYUfzuoDZ0Eq2XiNZyo/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NTQ4/ODE3LTE1Nzg2MDY0/NTctNjIxOS5qcGVn.jpeg',
        title: 'The Sacrificial Code',
        artist: 'Kali Malone',
        price: '505,13',
        format: '2xLP',
        genre: 'Electronic',
        style: 'Drone, Minimal',
        quantDisc: '2',
        color: 'Preto',
        Release: '2019'
    },
    {
        id: '9',
        imageUrl: 'https://i.discogs.com/DbFkeom4Di6YH9X5VHrDUyvUIYKBJYkpVycRbL6d6ms/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjg4/ODM3LTE1NTE1MzU1/ODMtOTEyMC5qcGVn.jpeg',
        title: 'Venereology',
        artist: 'Merzbow',
        price: '851,28',
        format: 'LP',
        genre: 'Electronic',
        style: 'Noise, Experimental',
        quantDisc: '1',
        color: 'Preto',
        Release: '1994'
    },
    {
        id: '10',
        imageUrl: 'https://i.discogs.com/p3gQXkNVB-b2kFrpNImZIP1mdU6xnWLxQRhBF_QtmZM/rs:fit/g:sm/q:90/h:607/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyOTc5/ODQtMTU0OTg2MTA3/Mi05MTc1LmpwZWc.jpeg',
        title: 'Frozen Niagara Falls',
        artist: 'Prurient',
        price: '221,35',
        format: '2xLP',
        genre: 'Electronic',
        style: 'Power Electronics, Noise',
        quantDisc: '2',
        color: 'Preto',
        Release: '2015'
    },
    {
        id: '11',
        imageUrl: 'https://i.discogs.com/6icxFPKdCe3U0QEbdHMJsT4rXtu9OwTBb1_rO1ClWcU/rs:fit/g:sm/q:90/h:598/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNzA3/NjM1LTE2MjMyODcy/NzMtNTA2NS5qcGVn.jpeg',
        title: 'You Wont Get What Yo...',
        artist: 'Daughters',
        price: '180,71',
        format: 'LP',
        genre: 'Rock',
        style: 'Noise Rock, Post-Hardcore',
        quantDisc: '1',
        color: 'Preto',
        Release: '2018'
    },
    {
        id: '12',
        imageUrl: 'https://i.discogs.com/99YwHQzkorFk1W2LkrfctB32EOu86SdPwB0vPJLeQ34/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NDg3/MDYtMTY2NzAzMDYz/MS0xODM3LmpwZWc.jpeg',
        title: 'Sheer Hellish Miasma',
        artist: 'Kevin Drumm',
        price: '579,76',
        format: 'LP',
        genre: 'Electronic',
        style: 'Noise, Experimental',
        quantDisc: '1',
        color: 'Preto',
        Release: '2002'
    },
    {
        id: '13',
        imageUrl: 'https://i.discogs.com/Sp-Bh705bUUXv6BoOJiW5hGeKNKJ27E4qZqvAu5PKKU/rs:fit/g:sm/q:90/h:609/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MzM1/ODA1LTE2Njc5NDIx/MzYtMjkyMS5qcGVn.jpeg',
        title: 'Deathconsciousness',
        artist: 'Have a Nice Life',
        price: '396,33',
        format: '2xLP',
        genre: 'Rock',
        style: 'Post-Punk, Shoegaze',
        quantDisc: '2',
        color: 'Preto',
        Release: '2008'
    },
    {
        id: '14',
        imageUrl: 'https://i.discogs.com/KUUZ7YnfuzaIRAxtLVXz5CQrNtJaY9wxNID3_uKKkVs/rs:fit/g:sm/q:90/h:602/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5NTYw/My0xNjg0ODk2MTA0/LTM1NTAuanBlZw.jpeg',
        title: 'Hanatarash 3',
        artist: 'Hanatarash',
        price: '936,47',
        format: 'LP',
        genre: 'Rock',
        style: 'Noise, Experimental',
        quantDisc: '1',
        color: 'Preto',
        Release: '1989'
    },
    {
        id: '15',
        imageUrl: 'https://i.discogs.com/QUsBq0Mmu-J6-sh7hHL7K6ZxdrtMkYN8h9j9W6ErFCo/rs:fit/g:sm/q:90/h:450/w:450/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyOTEw/MS0xMTQwNjI1NTI0/LmpwZWc.jpeg',
        title: 'Black One',
        artist: 'Sunn O)))',
        price: '441,39',
        format: '2xLP',
        genre: 'Rock',
        style: 'Drone Metal',
        quantDisc: '2',
        color: 'Preto',
        Release: '2005'
    },
    {
        id: '16',
        imageUrl: 'https://i.discogs.com/ma9No1pg9ILxRVN1y9nU-ybVmdStPjlNXLh7Qi4rOLw/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5MTUx/Mi0xNDM4MjU0MzM4/LTEwMDEuanBlZw.jpeg',
        title: 'Black Vase',
        artist: 'Prurient',
        price: '479,85',
        format: 'LP',
        genre: 'Electronic',
        style: 'Power Electronics, Noise',
        quantDisc: '1',
        color: 'Preto',
        Release: '2006'
    }
]

export const vinyl_seller_mock: vinyl_seller[] = [
    {
        id: '1', // Death Grips - Year of the Snitch (2018 - relativamente recente)
        seller: 'VinylCollector',
        reputation: 'Excelente',
        conditions: 'Novo/Lacrado',
        stock: 12,
        totalPrice: 126.57
    },
    {
        id: '2', // Boris - Amplifier Worship (1998 - edição antiga)
        seller: 'RetroRecords',
        reputation: 'Médio',
        conditions: 'Usado sem arranhões',
        stock: 3,
        totalPrice: 130.54
    },
    {
        id: '3', // Godspeed You! Black Emperor (clássico cult)
        seller: 'SoundParadise',
        reputation: 'Excelente',
        conditions: 'Novo/Lacrado',
        stock: 8,
        totalPrice: 141.89
    },
    {
        id: '4', // Converge - Jane Doe (raro e muito procurado)
        seller: 'HeavyMetalStore',
        reputation: 'Ruim',
        conditions: 'Usado com arranhões',
        stock: 1, // mantido baixo por ser raro
        totalPrice: 1135.12
    },
    {
        id: '5', // Swans - To Be Kind (edição recente mas popular)
        seller: 'ExperimentalSounds',
        reputation: 'Excelente',
        conditions: 'Novo/Lacrado',
        stock: 15,
        totalPrice: 198.08
    },
    {
        id: '6', // MF DOOM - MM..FOOD (clássico do hip hop)
        seller: 'HipHopVinyl',
        reputation: 'Médio',
        conditions: 'Usado sem arranhões',
        stock: 7,
        totalPrice: 164.54
    },
    {
        id: '7', // 100 Gecs (álbum muito recente - 2020)
        seller: 'NewWaveRecords',
        reputation: 'Novo',
        conditions: 'Novo/Lacrado',
        stock: 25,
        totalPrice: 141.55
    },
    {
        id: '8', // Kali Malone (artista de nicho)
        seller: 'DroneMaster',
        reputation: 'Excelente',
        conditions: 'Novo/Lacrado',
        stock: 5,
        totalPrice: 505.13
    },
    {
        id: '9', // Merzbow - Venereology (raro e extremo)
        seller: 'NoiseSpecialist',
        reputation: 'Médio',
        conditions: 'Usado com arranhões',
        stock: 2,
        totalPrice: 851.28
    },
    {
        id: '10', // Prurient - Frozen Niagara Falls (edição limitada)
        seller: 'ElectronicRarities',
        reputation: 'Excelente',
        conditions: 'Novo/Lacrado',
        stock: 4,
        totalPrice: 221.35
    },
    {
        id: '11', // Daughters (álbum popular no gênero)
        seller: 'RockEmporium',
        reputation: 'Ruim',
        conditions: 'Usado com arranhões',
        stock: 6,
        totalPrice: 180.71
    },
    {
        id: '12', // Kevin Drumm (experimental/ruído)
        seller: 'NoiseArt',
        reputation: 'Médio',
        conditions: 'Usado sem arranhões',
        stock: 3,
        totalPrice: 579.76
    },
    {
        id: '13', // Have a Nice Life (cult status)
        seller: 'PostPunkStore',
        reputation: 'Excelente',
        conditions: 'Novo/Lacrado',
        stock: 9,
        totalPrice: 396.33
    },
    {
        id: '14', // Hanatarash (extremamente raro)
        seller: 'RareNoise',
        reputation: 'Ruim',
        conditions: 'Usado com arranhões',
        stock: 1, // muito raro
        totalPrice: 936.47
    },
    {
        id: '15', // Sunn O))) (popular no gênero drone)
        seller: 'DroneKingdom',
        reputation: 'Excelente',
        conditions: 'Novo/Lacrado',
        stock: 11,
        totalPrice: 441.39
    },
    {
        id: '16', // Prurient - Black Vase (edição limitada)
        seller: 'PowerElectronics',
        reputation: 'Novo',
        conditions: 'Novo/Lacrado',
        stock: 3,
        totalPrice: 479.85
    }
]

export const vinyl_other_info_mock: vinyl_other_info[] = [
    {
        id: '1',
        description: `"Year of the Snitch" do Death Grips é uma obra caótica, imprevisível e cheia de experimentação sonora. Lançado em 2018, o álbum mistura rap, noise, punk e eletrônica de forma única e disruptiva.

        Esta edição em vinil traz prensagem de alta qualidade e arte gráfica insana, refletindo a energia intensa do grupo. Faixas como "Flies", "Hahaha" e "Black Paint" são verdadeiras explosões sonoras.`,
        weight: '480g',
        size: '32 x 32 x 2cm',
        label: 'Third Worlds'
    },
    {
        id: '2',
        description: `Raro e essencial para fãs de drone, doom e noise! "Amplifier Worship", lançado originalmente em 1998, é um marco absoluto na discografia da banda japonesa Boris. Esta edição dupla em vinil traz o som massivo e hipnótico do álbum em todo seu esplendor, agora remasterizado para uma experiência ainda mais imersiva.

        Com uma prensagem de alta qualidade e capa gatefold, este lançamento reúne peso extremo, ambiência sufocante e texturas sonoras distorcidas em uma jornada sonora única. Destaque para faixas como "Huge", "Vomitself" e "Ganbou-Ki", que redefinem os limites entre música e ruído.`,
        weight: '550g',
        size: '32 x 32 x 2cm',
        label: 'Third Man Records'
    },
    {
        id: '3',
        description: `"Lift Your Skinny Fists Like Antennas to Heaven" do Godspeed You! Black Emperor é um clássico absoluto do post-rock. Lançado em 2000, este álbum duplo é uma jornada épica por paisagens sonoras cinematográficas, melancólicas e transcendentes.

        Esta edição em vinil com capa gatefold oferece áudio remasterizado e encarte com artes belíssimas. Faixas como "Storm" e "Sleep" são verdadeiras viagens emocionais que atravessam o silêncio e o caos.`,
        weight: '620g',
        size: '32 x 32 x 2cm',
        label: 'Constellation Records'
    },
    {
        id: '4',
        description: `"Jane Doe" do Converge é um dos álbuns mais influentes do hardcore moderno. Lançado em 2001, combina agressividade, técnica e uma carga emocional avassaladora.</p>

        <p>Esta edição em vinil, rara e muito procurada, traz arte icônica e prensagem de alta qualidade. Faixas como "Concubine" e "Jane Doe" são verdadeiras descargas de fúria e intensidade.<`,
        weight: '540g',
        size: '32 x 32 x 2cm',
        label: 'Equal Vision Records'
    },
    {
        id: '5',
        description: `"To Be Kind" é uma obra monumental da banda Swans, lançada em 2014. Com mais de duas horas de duração, o álbum explora repetições hipnóticas, texturas densas e climas opressivos.

        Esta edição tripla em vinil oferece áudio imersivo e uma belíssima capa gatefold. Destaques para faixas como "Screen Shot", "Oxygen" e "Bring the Sun / Toussaint L’Ouverture". Uma experiência sonora total.`,
        weight: '750g',
        size: '32 x 32 x 3cm',
        label: 'Young God Records'
    },
    {
        id: '6',
        description: `"MM..FOOD" é um clássico absoluto do hip hop alternativo, onde MF DOOM combina rimas afiadas, samples criativos e uma atmosfera retrô única. Lançado originalmente em 2004, este disco é um banquete lírico para fãs do underground.

        Esta edição em vinil apresenta áudio remasterizado e arte original icônica. Destaque para faixas como "Beef Rapp", "Rapp Snitch Knishes" e "Hoe Cakes", que mostram toda a genialidade do vilão das rimas.`,
        weight: '530g',
        size: '32 x 32 x 2cm',
        label: 'Rhymesayers Entertainment'
    },
    {
        id: '7',
        description: `Explosivo, caótico e absolutamente moderno, "1000 Gecs" da dupla 100 Gecs é um marco da música hiperpop. Lançado em 2019, o disco mistura pop, punk, trap e glitch de forma insana e inovadora.

        Em vinil colorido com arte vibrante, esta edição é tão energética quanto o som que entrega. Faixas como "Money Machine", "Stupid Horse" e "xXXi_wud_nvrstøp_ÜXXx" são pura adrenalina sonora.`,
        weight: '470g',
        size: '32 x 32 x 2cm',
        label: 'Dog Show Records'
    },
    {
        id: '8',
        description: 'The Sacrificial Code da compositora Kali Malone é uma meditação sonora densa e contemplativa. Lançado em 2019, o álbum explora os limites do minimalismo e da música sacra através de longas peças para órgão.Esta edição tripla em vinil oferece uma prensagem impecável e encarte com textos conceituais. Faixas como Spectacle of Ritual e The Sacrificial Code criam um ambiente imersivo de pura introspecção sonora.',
        weight: '780g',
        size: '32 x 32 x 3cm',
        label: 'Ideal Recordings'
    },
    {
        id: '9',
        description: `Violento, visceral e intransigente, "Venereology" de Merzbow é um manifesto sonoro do noise japonês. Lançado em 1994, é um dos discos mais extremos da história da música experimental.</p>

        <p>Esta prensagem rara em vinil é um mergulho brutal em paredes de ruído analógico. Faixas como "I Lead You Towards Glorious Times" são experiências auditivas radicais, desafiadoras e poderosas.`,
        weight: '520g',
        size: '32 x 32 x 2cm',
        label: 'Relapse Records'
    },
    {
        id: '10',
        description: `"Frozen Niagara Falls" é uma das obras mais ambiciosas de Prurient, explorando paisagens sonoras sombrias e colagens de ruído industrial. Lançado em 2015, o álbum duplo é denso, lírico e perturbador.

        Com embalagem luxuosa e prensagem pesada, este lançamento em vinil é uma peça central para colecionadores de noise e power electronics. Faixas como "Greenpoint" e "Dragonflies to Sew You Up" são destaques intensos.`,
        weight: '620g',
        size: '32 x 32 x 2cm',
        label: 'Profound Lore Records'
    },
    {
        id: '11',
        description: `"You Won't Get What You Want" da banda Daughters é um dos álbuns mais impactantes da década. Lançado em 2018, mistura noise rock, post-punk e tensão constante em um clima apocalíptico.

        Esta edição em vinil de alta qualidade traz arte gráfica marcante e som explosivo. Faixas como "Satan in the Wait" e "Guest House" são hinos modernos de desespero sonoro.`,
        weight: '540g',
        size: '32 x 32 x 2cm',
        label: 'Ipecac Recordings'
    },
    {
        id: '12',
        description: `"Sheer Hellish Miasma" de Kevin Drumm é um clássico do noise extremo. Lançado em 2002, o álbum é uma parede de som ininterrupta que testa os limites do volume e da percepção auditiva.<

        Em vinil pesado e com arte minimalista, esta edição é uma das mais procuradas por fãs de ruído e experimentalismo radical. Uma única faixa, devastadora, ocupa cada lado do disco.`,
        weight: '510g',
        size: '32 x 32 x 2cm',
        label: 'Mego'
    },
    {
        id: '13',
        description: `"Deathconsciousness", da dupla Have a Nice Life, é um álbum cult do post-punk/depressive shoegaze, lançado originalmente em 2008. Sua produção lo-fi e atmosfera melancólica conquistaram uma legião de fãs ao redor do mundo.

        Esta edição em vinil duplo vem com livreto extenso e prensagem cristalina, ideal para mergulhar nas faixas icônicas como "Bloodhail" e "Earthmover". Um disco que se ouve com o coração pesado.`,
        weight: '600g',
        size: '32 x 32 x 2cm',
        label: 'The Flenser'
    },
    {
        id: '14',
        description: `Caótico e lendário, Hanatarash é a essência do noise extremo japonês. Esta coletânea limitada reúne registros ao vivo e faixas raras gravadas entre os anos 80 e 90, mostrando a brutalidade sonora e performática da banda.</p>

        Vinil prensado em tiragem extremamente limitada, com arte gráfica chocante e encarte com fotos raras. Uma peça obrigatória para fãs de destruição sonora sem limites.`,
        weight: '480g',
        size: '32 x 32 x 2cm',
        label: 'Alchemy Records'
    },
    {
        id: '15',
        description: `"Monoliths & Dimensions" do Sunn O))) é uma experiência sonora colossal que une drone, doom e elementos orquestrais. Lançado em 2009, este álbum é um marco do experimental pesado.

        Com capa gatefold luxuosa e prensagem densa, o disco leva o ouvinte por camadas e camadas de som arrastado e místico. Faixas como "Aghartha" e "Alice" são hipnóticas e transcendentes.`,
        weight: '580g',
        size: '32 x 32 x 2cm',
        label: 'Southern Lord'
    },
    {
        id: '16',
        description: `"Black Vase" é uma das edições mais obscuras e procuradas de Prurient. Lançado como edição limitada, é um mergulho profundo nas paisagens do power electronics e do ambient industrial.</p>

        <p>Em vinil preto pesado com capa simples e misteriosa, o disco oferece tensão e desconforto em cada faixa. Uma obra densa e perturbadora, com destaque para "Terracotta Spine" e "Total Disease".`,
        weight: '500g',
        size: '32 x 32 x 2cm',
        label: 'Hospital Productions'
    }
];
