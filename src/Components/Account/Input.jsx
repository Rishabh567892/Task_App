import { motion } from "framer-motion"

const Input = ({ AllFields, formData, setFormData, v, inputRefs, i }) => {
  
  const handleKeyUp = (e, i) => {
    const nextInput = inputRefs.current[i+1]

    nextInput && (e.key == "Enter") && nextInput.focus()
  }

  return (
    <motion.input
      {...AllFields[v]}
      ref={el => inputRefs.current[v] = el}
      className="w-full px-4 py-2 bg-white border rounded-lg outline-none hover:border-[var(--primary)]"
      value={formData[v] || ""}
      onChange={e => setFormData(pre => { return { ...pre, [v]: e.target.value } })}
      onKeyUp={e => handleKeyUp(e, i)}
      whileFocus={{boxShadow: "0 0 10px var(--primary)"}}
    />
  )
}

export default Input