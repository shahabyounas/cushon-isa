export class Database{

    constructor(name, group, version){
        this.database_ = null
        this.config_ = {}
        this.version_ = version

    }

    getDatabaseConnection(){
        return this._db
    }

    getConnectionInstance(){
        return this.db
    }
}

export default Database;