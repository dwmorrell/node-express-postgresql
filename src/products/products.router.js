const router = require("express").Router({ mergeParams: true });
const controller = require("./products.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const { listOutOfStockCount, listPriceSummary, listTotalWeightByProduct } = require("./products.controller");

router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:productId([0-9]+)").get(controller.read).all(methodNotAllowed);
router.route("/out-of-stock-count").get(listOutOfStockCount).all(methodNotAllowed);
router.route("/price-summary").get(listPriceSummary).all(methodNotAllowed);
router.route("/total-weight-by-product").get(listTotalWeightByProduct).all(methodNotAllowed);

module.exports = router;
