const Chatkit = require("@pusher/chatkit-server");
const AWS = require("aws-sdk");

const app = express();

const translate = new AWS.Translate({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-2"
});

app.post("/translate", (req, res) => {
  const { text, lang } = req.body;
  const params = {
    SourceLanguageCode: "auto",
    TargetLanguageCode: lang,
    Text: text
  };

  translate.translateText(params, (err, data) => {
    if (err) {
      return res.send(err);
    }

    res.json(data);
  });
});
