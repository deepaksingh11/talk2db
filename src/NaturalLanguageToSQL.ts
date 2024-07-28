import { sqlAgent } from "./sqlAgent";
import { createDataSource, DbConfig } from "./dbConfig";

export class NaturalLanguageToSQL {
  private dbConfig: DbConfig;
  private apikey: string;
  private modelName: string;

  constructor(dbConfig: DbConfig, apikey: string, modelName: string) {
    this.dbConfig = dbConfig;
    this.apikey = apikey;
    this.modelName = modelName;
  }

  async query(input: string): Promise<string> {
    const datasource = createDataSource(this.dbConfig);
    await datasource.initialize();

    const agent = await sqlAgent(datasource, this.apikey, this.modelName);
    const queryString = `${input}`;

    const result = await agent.invoke({ input: queryString });
    const output = JSON.stringify(result.output);

    await datasource.destroy();
    return output;
  }
}
