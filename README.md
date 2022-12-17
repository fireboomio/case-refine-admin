# 基于 Fireboom 的自带 refine 后台应用

1. 数据库准备

本地准备一个 mysql 数据库，连接信息为 `mysql://root@127.0.0.1:3306/fireboom-refine`

2. authing 应用准备

更新`server/store/list/FbAuthentication`配置文件，参考

```json
[
 {
  "authSupplier": "openid",
  "config": {"id":"authing","clientId":"xxx","clientSecret":"xxx","issuer":"https://xxx.authing.cn/oidc","discoveryURL":"https://xxx.authing.cn/oidc/.well-known/openid-configuration","jwks":0,"jwksJSON":"","jwksURL":"https://xxx.authing.cn/oidc/.well-known/jwks.json","userInfoEndpoint":"https://xxx.authing.cn/me","userInfoCacheTtlSeconds":0},
  "createTime": "",
  "id": 3,
  "isDel": 0,
  "name": "authing",
  "switchState": ["cookieBased","tokenBased"],
  "updateTime": "2022-12-12 01:01:01"
 }
 ]
```

3. 安装

```bash
cd admin
pnpm i
# yarn
# npm i
```

4. 运行

启动`admin`服务
```bash
pnpm dev
```

新开一个`shell`启动`fireboom`服务

```bash
cd server
./run.sh
```

新开一个`shell`启动钩子服务

```bash
cd server/custom-ts
yarn
# npm i
npm run dev
```

6. 在数据库中插入初始数据

```sql
INSERT INTO `fireboom-refine`.`Menu` (`id`, `parentId`, `label`, `path`, `icon`, `sort`, `level`) VALUES (1, NULL, '控制台', 'Dashboard', NULL, 0, 1);
INSERT INTO `fireboom-refine`.`Menu` (`id`, `parentId`, `label`, `path`, `icon`, `sort`, `level`) VALUES (2, NULL, '系统管理', 'Manage', NULL, 0, 1);
INSERT INTO `fireboom-refine`.`Menu` (`id`, `parentId`, `label`, `path`, `icon`, `sort`, `level`) VALUES (3, 2, '用户管理', 'User', NULL, 0, 1);
INSERT INTO `fireboom-refine`.`Menu` (`id`, `parentId`, `label`, `path`, `icon`, `sort`, `level`) VALUES (4, 2, '角色管理', 'Role', NULL, 0, 1);
INSERT INTO `fireboom-refine`.`Menu` (`id`, `parentId`, `label`, `path`, `icon`, `sort`, `level`) VALUES (5, 2, '菜单管理', 'Menu', NULL, 0, 1);
INSERT INTO `fireboom-refine`.`Menu` (`id`, `parentId`, `label`, `path`, `icon`, `sort`, `level`) VALUES (6, 2, 'API管理', 'Api', NULL, 0, 1);
INSERT INTO `fireboom-refine`.`Menu` (`id`, `parentId`, `label`, `path`, `icon`, `sort`, `level`) VALUES (7, NULL, '宠物管理', 'Pet', NULL, 0, 1);
INSERT INTO `fireboom-refine`.`Role` (`id`, `code`, `desc`) VALUES (1, 'admin', '管理员');
INSERT INTO `fireboom-refine`.`_MenuToRole` (`A`, `B`) VALUES (1, 1);
INSERT INTO `fireboom-refine`.`_MenuToRole` (`A`, `B`) VALUES (2, 1);
INSERT INTO `fireboom-refine`.`_MenuToRole` (`A`, `B`) VALUES (3, 1);
INSERT INTO `fireboom-refine`.`_MenuToRole` (`A`, `B`) VALUES (4, 1);
INSERT INTO `fireboom-refine`.`_MenuToRole` (`A`, `B`) VALUES (5, 1);
INSERT INTO `fireboom-refine`.`_MenuToRole` (`A`, `B`) VALUES (6, 1);
INSERT INTO `fireboom-refine`.`_MenuToRole` (`A`, `B`) VALUES (7, 1);
```

7. 打开 [http://localhost:9123/#/workbench/setting](http://localhost:9123/#/workbench/setting) 查看`安全` -> `重定向URL`，新增一个`localhost:4321/oidc/callback`重定向URL

8. 打开 [http://localhost:4321](http://localhost:4321) 完成登录，然后为该用户赋予权限（假设user.id=1）

```sql
INSERT INTO `fireboom-refine`.`_RoleToUser` (`A`, `B`) VALUES (1, 1);
```

重新刷新页面