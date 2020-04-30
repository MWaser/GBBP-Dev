"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const reactn = require('reactn');
const useGlobal = reactn.useGlobal;
const core_1 = require("@material-ui/core");
const mui_datatables_1 = __importDefault(require("mui-datatables"));
const axios_1 = __importDefault(require("axios"));
const config = require('../../config');
const PageTitle_1 = __importDefault(require("../../components/PageTitle"));
function Wallet() {
    const [userInfo, setUserInfo] = useGlobal("userInfo");
    const [tableData, setTableData] = react_1.useState([]);
    const [loaded, setLoaded] = react_1.useState(false);
    react_1.useEffect(() => {
        axios_1.default.post(config.apiUrl + '/api/user/wallet', { "MemberId": userInfo.Id }).then(res => { setTableData(res.data); setLoaded(true); })
            .catch(err => { alert(err.message); setLoaded(true); });
    }, []);
    if (userInfo.StatusId < 3) {
        return (react_1.default.createElement("div", null, " You need to complete the Token Tutorial through Step 4. Send Tokens to active your wallet."));
    }
    else if (loaded) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(PageTitle_1.default, { title: "Wallet" }),
            react_1.default.createElement(core_1.Grid, { container: true, spacing: 4 },
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(mui_datatables_1.default, { title: "Transactions", data: tableData, columns: ["Token", "Amount", "Memo", "Name", "Chain", "Addr", "DTS"], options: { filterType: "checkbox", } })))));
    }
    else {
        return (react_1.default.createElement("div", null, " Loading... "));
    }
}
exports.default = Wallet;
;
//# sourceMappingURL=Wallet.js.map