import { Img, View } from "@/elements";
import { Images } from "@/public";



export const formattedCategory = (category: string) => Array.isArray(category) ? category[0] : category;
export  const formattedTitle = (title: string) => Array.isArray(title) ? title.join(' ') : title;


export const nodata = <View className="no-data"><Img src={Images.EmptyData} alt="" /></View>