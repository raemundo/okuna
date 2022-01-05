import React from "react";
import { View, Text } from "react-native";
import twi, { tw } from "~/lib/tailwind";
import Link from "next-rn/link";
import { useTranslation } from "react-i18next";
import FontAwesomeIcon from "~/component-lib/FontAwesomeIcon";
import {
  faCogs,
  faFlag,
  faGavel,
  faLink,
  faPaintRoller,
  faQuestionCircle,
  faSignOutAlt,
  faUser,
  faGifts,
  faUserAlt,
  faUserFriends,
  faListUl,
  faNetworkWired,
  faUserCircle,
  faMobile
} from "@fortawesome/free-solid-svg-icons";
import Card from "~/component-lib/Card";

export default function OkUserMenu({ style }) {
  const { t } = useTranslation();
  return (
    <Card style={style}>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  cellphone */}
        <FontAwesomeIcon icon={faMobile} style={twi`dark:text-white`} />{" "}
        {t("get_the_app")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  */}
        {t("drawer__main_title")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  */}
        <FontAwesomeIcon icon={faUser} style={twi`dark:text-white`} />{" "}
        {t("drawer__menu_title")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  face-profile */}
        <FontAwesomeIcon icon={faUserCircle} style={twi`dark:text-white`} />{" "}
        {t("drawer__profile")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  google-circles-communities */}
        <FontAwesomeIcon icon={faNetworkWired} style={twi`dark:text-white`} />{" "}
        {t("drawer__my_circles")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  format-list-bulleted-type */}
        <FontAwesomeIcon icon={faListUl} style={twi`dark:text-white`} />{" "}
        {t("drawer__my_lists")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md account-supervisor  */}
        <FontAwesomeIcon icon={faUserFriends} style={twi`dark:text-white`} />{" "}
        {t("drawer__my_followers")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  account */}
        <FontAwesomeIcon icon={faUserAlt} style={twi`dark:text-white`} />{" "}
        {t("drawer__my_following")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  wallet-giftcard */}
        {/* <i class="fas fa-gift-card"></i> not working */}
        <FontAwesomeIcon icon={faGifts} style={twi`dark:text-white`} />{" "}
        {t("drawer__my_invites")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  gavel */}
        <FontAwesomeIcon icon={faGavel} style={twi`dark:text-white`} />{" "}
        {t("drawer__my_mod_penalties")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  flag*/}
        <FontAwesomeIcon icon={faFlag} style={twi`dark:text-white`} />{" "}
        {t("drawer__my_pending_mod_tasks")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  cogs */}
        <FontAwesomeIcon icon={faCogs} style={twi`dark:text-white`} />{" "}
        {t("drawer__settings")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  format-paint */}
        <FontAwesomeIcon icon={faPaintRoller} style={twi`dark:text-white`} />{" "}
        {t("drawer__themes")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  help-circle */}
        <FontAwesomeIcon icon={faQuestionCircle} style={twi`dark:text-white`} />{" "}
        {t("drawer__help")}
      </Link>
      <Link
        routeName=""
        style={tw`border-b-2 border-gray-200 p-3 dark:text-white`}
      >
        {/* md  link */}
        <FontAwesomeIcon icon={faLink} style={twi`dark:text-white`} />{" "}
        {t("drawer__useful_links_title")}
      </Link>
      <Link routeName="" style={tw`p-3 dark:text-white`}>
        {/* md exit-to-app */}
        <FontAwesomeIcon
          icon={faSignOutAlt}
          style={twi`dark:text-white`}
        />{" "}
        {t("drawer__logout")}
      </Link>
    </Card>
  );
}
