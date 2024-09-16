import { Banner } from "@/components/Banner";
import { ListContact } from "@/components/KontakComponents/ListContact";
import { QALists } from "@/components/KontakComponents/QALists";

export default function KontakPage() {
    return (
        <>
            <Banner />
            <ListContact />
            <QALists/>
        </>
    )
}