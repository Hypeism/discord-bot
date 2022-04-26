import { PrismaClient } from '@prisma/client';
import { client } from '../index';

client.on('ready', () => {
    const prisma = new PrismaClient();

    async function main() {
        const post = await prisma.post.create({
            data: {
                title: 'My first post',
                body: 'My first body',
            },
            catch(e) {
                console.log(e);
                throw e;
            },
        });
        console.log(post);
    }

    main();
});

