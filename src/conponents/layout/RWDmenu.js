import React, { useContext, useState } from 'react';
import { Button, Menu } from 'antd';
import AuthContext from '../auth/AuthContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const RWDMenuitems = [
  getItem('中秋專區', '1', ''),
  getItem('禮盒系列', 'sub1', '', [
    getItem('2023中秋禮盒', '2'),
    getItem('鳳梨酥、伴手禮盒', '3'),
    getItem('6入9入12入禮盒', '4'),
  ]),
  getItem('全系列商品', 'sub2', '', [
    getItem('精緻伴手禮', '5'),
    getItem('糖果、餅乾', '6'),
  ]),
  getItem('優惠活動', 'sub3','', [
    getItem('2023中秋專區', '7'),
    getItem('指定品項85折', '8'),
  ]),
  getItem('品牌簡介', '9',''),
  getItem('出貨方式', '10',''),
];
const LogoutButton = styled(Button)`
    margin-top: 267px;
    margin-left: 190px;
    position: absolute;
    z-index: 1;

    background-color: #fff;
`
const LogoutDiv = styled.div`
  width: 356px;
  background-color: #fff;
`

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
const RWDmenu = () => {
  const {isAuthenticated,logout} = useContext(AuthContext);
  const [openKeys, setOpenKeys] = useState(['']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div>
      <Menu
        mode="vertical"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
          position:'absolute',
          zIndex:'1',
          height: '100vh'
        }}
        items={RWDMenuitems}
        />
        {isAuthenticated ?
          <LogoutDiv>
            <Link to ="/">
              <LogoutButton onClick={() => logout()}>登出</LogoutButton>
            </Link>
          </LogoutDiv>
          :
          <div></div>
        }
    </div>
  );
};
export default RWDmenu;
