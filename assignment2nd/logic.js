var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var userAPI = /** @class */ (function () {
    function userAPI() {
        this.baseUrl = 'https://reqres.in/api/users?page=2';
    }
    userAPI.prototype.showIndividualUser = function (url, name, email, id) {
        var modal = document.querySelector(".modal");
        var modalImg = document.querySelector(".modalImg");
        var userName = document.querySelector(".userName");
        var userEmail = document.querySelector(".userEmail");
        var userID = document.querySelector(".userID");
        var close1 = document.querySelector(".close");
        modalImg.src = url;
        userName.innerHTML = "Full Name : ".concat(name);
        userEmail.innerHTML = "email : ".concat(email);
        userID.innerHTML = "ID : ".concat(id);
        modal.classList.add("appear");
        close1.addEventListener("click", function () {
            modal.classList.remove("appear");
        });
    };
    userAPI.prototype.printUsers = function (user) {
        var _this = this;
        var userDataContainer = document.getElementById('images');
        userDataContainer.innerHTML = '';
        user.forEach(function (details) {
            var userCard = document.createElement('div');
            userCard.classList.add('box');
            console.log(details);
            userCard.innerHTML = "<p id='name'>".concat(details.first_name, "</p>\n      <p id='email'>").concat(details.email, "</p>\n      <img class='img' src=").concat(details.avatar, ">");
            userDataContainer.appendChild(userCard);
            userCard.addEventListener('click', function () {
                _this.showIndividualUser(details.avatar, details.first_name + ' ' + details.last_name, details.email, details.id);
            });
        });
    };
    userAPI.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, resp, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(this.baseUrl, "/data");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(url)];
                    case 2:
                        resp = _a.sent();
                        if (!resp.ok) {
                            throw new Error("HTTP error Found, status Code: ".concat(resp.status));
                        }
                        return [4 /*yield*/, resp.json()];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 4:
                        err_1 = _a.sent();
                        console.error('Error:', err_1);
                        throw err_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return userAPI;
}());
var myApi = new userAPI();
myApi.getData()
    .then(function (data) {
    myApi.printUsers(data.data);
})
    .catch(function (err) {
    console.error('Error:', err);
});
