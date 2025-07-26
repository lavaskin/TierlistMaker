import { TemplateIdEnum } from "@app/models/enums/template-ids.enum";
import { TierlistModel } from "@app/models/tierlist.model";
import { preProcessTemplateData } from "@app/utils";

// Info from: https://zenless-zone-zero.fandom.com/wiki/Agent#Playable_Agents

const blankTemplateData: TierlistModel = {
	templateId: TemplateIdEnum.Blank,
	name: "Blank",
	items: [],
}

// Pre-process the template data to add IDs and sort items and export them
preProcessTemplateData(blankTemplateData);
export default blankTemplateData;