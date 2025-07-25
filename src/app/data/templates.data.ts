import { TierlistModel } from "@app/models/tierlist.model";
import baTemplateData from "./templates/blue-archive.data";
import zzzTemplateData from "./templates/zzz.data";
import ffxivJobsTemplateData from "./templates/ffxiv-jobs.data";
import blankTemplateData from "./templates/blank.data";

export const TemplatesData: TierlistModel[] = [
	blankTemplateData,
	baTemplateData,
	zzzTemplateData,
	ffxivJobsTemplateData,
];
