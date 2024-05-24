# setup prisma
npm install prisma --save-dev
npx prisma
npx prisma init

# update database
prisma migrate dev --name init

# install client
npm install --save @prisma/client
npx prisma generate


# seed database
npx prisma db seed 

# search database
npx prisma studio