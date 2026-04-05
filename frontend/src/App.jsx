function Botao(props) {
  const tamanhoBotao = props.tamanhobotao || "w-fit";
  return (
    <button
      className={`${props.corfundobotao} ${tamanhoBotao} text-title rounded text-subtitulo py-2 px-4`}
    >
      {props.children}
    </button>
  );
}

function Input(props) {
  return (
    <input
      type="number"
      placeholder="0"
      className={`w-full border-2 ${props.corbordainput} bg-surface text-title  rounded py-2 px-4 outline-none`}
    />
  );
}

function Card(props) {
  return (
    <div
      className={`flex flex-col rounded-2xl gap-4 p-10 ${props.corbordacard} ${props.corfundocard} border-2`}
    >
      <h3 className="text-title text-subtitulo">{props.titulocard}</h3>

      <Input corbordainput={props.corbordainput} />

      <div className="flex flex-wrap gap-4">
        {props.children}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="p-10 gap-4 bg-primary flex flex-col">
      <Card corbordacard="border-success" corfundocard="bg-green-100" corbordainput="border-success" titulocard="Aumentar">
        <Botao corfundobotao="bg-success">
          +1
        </Botao>
        <Botao corfundobotao="bg-success">
          +5
        </Botao>
        <Botao corfundobotao="bg-success">
          +10
        </Botao>
        <Botao corfundobotao="bg-success">
          +50
        </Botao>
        <Botao corfundobotao="bg-success">
          +100
        </Botao>
      </Card>
      
      <Card corfundocard="bg-red-100" corbordacard="border-danger" corbordainput="border-danger" titulocard="Diminuir">      
        <Botao corfundobotao="bg-danger">
          -1
        </Botao>
        <Botao corfundobotao="bg-danger">
          -5
        </Botao>
        <Botao corfundobotao="bg-danger">
          -10
        </Botao>
        <Botao corfundobotao="bg-danger">
          -50
        </Botao>
        <Botao corfundobotao="bg-danger">
          -100
        </Botao>

      </Card>

      <Botao corfundobotao="bg-brand" tamanhobotao="w-full">        
        Confirmar alterações
      </Botao>
    </div>
  );
}

export default App;
