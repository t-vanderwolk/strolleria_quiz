export default function Questions() {

    function onSelect(){
        console.log('radio button change')
    }
  return (
    <div className="questions">
        <h2 className="text-light">Simple Question 1</h2>
        <ul>
            <li>
                <input 
                type='radio'
                value={true}
                name='options'
                id="q1-option"
                onChange={onSelect}
                />
            </li>
        </ul>
    </div>
  )
}