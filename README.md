# Docbot :robot: 

Upload your own docs to be queried by the docbot using Langchain and the language model `gpt-3.5-turbo`. Exploring how project docs are low-hanging fruit for how natural language processing (NLP) will have immediate impact on software documentation as the tiny tip of the iceberg.

https://user-images.githubusercontent.com/1711674/232352601-e1e1d1ac-37f8-4120-9f70-aecbd5247857.mp4


### Docbot Pre-Requisites

- [Python](https://www.python.org/downloads/)
- [Flask](https://pypi.org/project/Flask/)

```commandline
pip install -U Flask
```

- LLM modules

```commandline
pip install llama_index openai langchain

# Or with requirements.txt

pip install -r requirements.txt
```

Add your ChatGPT key in `docbot.py`. Get a key from [OpenAI](https://platform.openai.com/account/api-keys). You get $5 free in API usage from OpenAI. If you upload a small file like the example, `gpt-3.5-turbo` model doesn't incur much, if any cost. GAI competition should drive small usage to zero.

```python
os.environ["OPENAI_API_KEY"] = "insert_your_key_here"
```

### Run

Run the app with `python3 docbot.py` which starts the flask server running the web UI.

```commandline
$ git clone https://github.com/nerdalert/docs-chatbot.git
$ python3 docbot.py
 * Serving Flask app 'docbot'
 * Debug mode: on
INFO:werkzeug:WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5000
 * Running on http://192.168.1.203:5000
INFO:werkzeug:Press CTRL+C to quit
```

### Docbot Usage

Point your browser at the link flask gives you and upload a document. I uploaded this [markdown file](https://github.com/nexodus-io/nexodus/blob/main/docs/development/design/design-discovery.md). You could also add txt files (and probably lots of other filetypes).
If you ask about something completely irrelevant to the docs it will tell you it doesn't know about that topic.

Bugs/Incomplete: 
- The upload button doesn't show what file you chose and once you hit upload, it doesn't list what file has been indexed in `json.index` but you can see the uploaded file in the `./data` directory and view the `index.json` file in the root directory. The file gets chunked and uploaded to ChatGPT then indexed locally.
- This doesn't support PDFs, but it's easy to add with `from langchain.document_loaders import PyPDFLoader`
- Langchain is awesome! It is changing daily, for example, with I need to swap `LLMPredictor(model_name="gpt-3.5-turbo")`  to `from langchain.chat_models import ChatOpenAI` for `gpt-3.5-turbo` so you will see a deprecation warning until I fix it.
