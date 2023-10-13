import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCoursesTable1697200618039 } from "src/migrations/1697200618039-CreateCoursesTable"
import { CreateTagsTable1697202074543 } from "src/migrations/1697202074543-CreateTagsTable"
import { CreateCoursesTagsTable1697206625779 } from "src/migrations/1697206625779-CreateCoursesTagsTable"
import { AddCoursesIdToCoursesTagsTable1697214532326 } from "src/migrations/1697214532326-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1697215738545 } from "src/migrations/1697215738545-AddTagsIdToCoursesTagsTable";

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1697200618039,
    CreateTagsTable1697202074543,
    CreateCoursesTagsTable1697206625779,
    AddCoursesIdToCoursesTagsTable1697214532326,
    AddTagsIdToCoursesTagsTable1697215738545
  ]
})