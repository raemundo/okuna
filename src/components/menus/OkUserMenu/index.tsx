import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import Link from "next-rn/link";
import { useTranslation } from "react-i18next";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon"
import { faLink, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Card from "~/component-lib/Card";

export default function OkUserMenu({ style }) {
  const { t } = useTranslation();
  return (
    <Card style={style}>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__main_title")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__menu_title")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__profile")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__my_circles")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__my_lists")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__my_followers")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__my_following")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__my_invites")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__my_mod_penalties")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__my_pending_mod_tasks")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__settings")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__themes")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} /> {t("drawer__help")}</Link>
      <Link routeName="" style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}><FontAwesomeIcon icon={faLink} style={twi`dark:text-white`} /> {t("drawer__useful_links_title")}</Link>
      <Link routeName="" style={tw`p-3 dark:text-white`}><FontAwesomeIcon icon={faSignOutAlt} style={twi`dark:text-white`} /> {t("drawer__logout")}</Link>
    </Card>
  );
}
