import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.product.createMany({
        data: [
            {
                name: 'Black Mattress',
                description: 'Testimonium carmen hic vulariter nobis deludo hic. Quo convoco usitas temeritas candidus victoria delibero video solium vere. Acervus derideo nemo. Stella sulum sordeo cum versus perferendis cerno sonitus trepide averto. Suscipio theca adicio via vulgivagus administratio. Aggredior ademptio sortitus aegre odio cunae. Suppono clementia odio excepturi terra vehemens armarium comes demoror centum. Careo abduco tempus amplus. Tepidus cras desidero aptus tergo adipiscor patria dignissimos uberrime ultra. Carpo vinco coniuratio vesco arbustum mollitia antea. Vilicus cattus tollo. Illum ubi vaco tricesimus animi collum tempore patior conspergo.',
                price: 100.00,
                imageUrl: '/product_1.webp',
            },
            {
                name: 'Blue Wooden Board',
                description: 'Quo pecto cognomen neque studio solitudo. Amiculum comes derideo in voluptatibus comes curiositas apto subvenio. Abeo quisquam adsum sortitus assumenda. Spes caelum culpa ventito defaeco vel caritas tantum ipsum. Venio vestrum vestigium adhuc curvo derideo demo. Eveniet terminatio nemo vesco antiquus atqui tergum. Tamquam amaritudo ipsam nostrum. Reiciendis angulus carmen bellum utor vomer. Denuo absorbeo officiis supplanto damnatio acsi voro caute termes. Varius confido aliquid angustus sequi teneo.',
                price: 150.00,
                imageUrl: '/product_2.webp',
            },
            {
                name: 'Beige 3-Seat Sofa',
                description: 'Cura suffoco aspicio tametsi triduana eveniet canonicus aiunt autem. Templum amiculum caste stipes. Volaticus debilito audentia stillicidium vilicus artificiose viscus astrum. Voluptas versus contigo combibo tres comes argumentum paens voluptatibus. Nostrum omnis comprehendo amitto alius super vorago. Sulum cunctatio repudiandae cribro sto theatrum. Calculus ter nisi veritas aureus desipio celebrer adhaero conturbo chirographum. Deripio carus ad sit demens. Abutor super virga certus adfectus amplexus. Antiquus talis cometes ulterius textus theologus.',
                price: 200.00,
                imageUrl: '/product_3.webp',
            }
        ],
    });
}

main()
    .then(() => {
        console.log('Products added successfully');
    })
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });