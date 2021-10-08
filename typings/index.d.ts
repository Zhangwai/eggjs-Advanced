import 'egg';

declare module 'egg' {
    interface Application {
        mysql: any,
        redis: any,
        mailer: any,
        uuidv4:any,
        // passport:any
    }
}