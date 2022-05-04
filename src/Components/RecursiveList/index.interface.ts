import { Dispatch, SetStateAction } from "react";
import { ViewProps } from "react-native";
import { CategoryType } from "../../Constants/Cetagories";

export interface RecursiveListProps extends ViewProps{
    dataList: CategoryType[]
    activeRoute: string;
    setActiveRoute: Dispatch<SetStateAction<string>>
    parantTitle?: string;
}

