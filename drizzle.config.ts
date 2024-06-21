import {defineConfig} from "drizzle-kit";


export default defineConfig({
    
    schema:"./src/db/schema.ts",
    out:"./migrations",
    dialect:"postgresql",
    breakpoints:false,

    dbCredentials:{
        url:'postgresql://neondb_owner:cUkSA4Lwq5Cy@ep-silent-credit-a1y0y7fh-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
    }
});
