import react from "react";
import AccountsHeroSection from "./accountsHeroSection";
import BlackAccountType from "./accountsType";
import Faq from "../../components/faq";
import OpenYourAccount from "../../components/openYourAccount";

export default function Accounts() {
    return (
        <div>
            <AccountsHeroSection />
            <BlackAccountType />
            <OpenYourAccount />
            <Faq />

        </div>
    )
}