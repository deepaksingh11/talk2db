import { SqlToolkit, createSqlAgent } from "langchain/agents/toolkits/sql";
import { SqlDatabase } from "langchain/sql_db";
import { DataSource } from "typeorm";
import { createModel } from "./model/openai";

export const sqlAgent = async (
  datasource: DataSource,
  apiKey: string,
  modelName: string
) => {
  const db = await SqlDatabase.fromDataSourceParams({
    appDataSource: datasource,
  });

  const model = createModel(apiKey, modelName);
  const toolkit = new SqlToolkit(db, model);
  const executor = createSqlAgent(model, toolkit);

  return executor;
};
