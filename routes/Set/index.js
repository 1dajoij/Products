const express = require('express');
const querySql = require("../../mysql");
const router = express.Router();

// /black_list
router.post("/black_list", async (req, res) => {
    let {id} = req.query;
    id = Number(id) | 0;
    const [{"count(id)": n}] = await querySql(`
        SELECT count(id) from basic_info WHERE id = ${id}
    `);
    !n && (id = 0);
    if(!id) {
        res.send({
            code: 400,
            message: "请输入存在的id"
        });
        return;
    };
    const [{"count(id)": len}] = await querySql(`
        SELECT count(id) from black_list_movie WHERE id=${id}
    `);
    if(len) {
        res.send({
            code: 400,
            message: "此资源已被添加至黑名单。"
        });
        return;
    } else {
        querySql(`
            INSERT INTO black_list_movie (id) VALUES (${id})
        `).then(() => res.send({
            code: 200,
            message: `已将id:${id}列入黑名单。`
        })).catch(err => res.send({
            code: 400,
            message: "发生未知错误，请稍后重试。"
        }));
    }
});

// 


module.exports = router;