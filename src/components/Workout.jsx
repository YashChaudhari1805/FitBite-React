import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getWorkoutsAPI, logWorkoutAPI, deleteWorkoutAPI } from '../api/workout.api'

const DEFAULT_EXERCISES = [
  { name: 'Bench Press',           sets: 4, reps: '8-12', weight: '60kg', intensity: 'High' },
  { name: 'Incline Dumbbell Press', sets: 3, reps: '10',   weight: '20kg', intensity: 'Medium' },
  { name: 'Chest Flys',            sets: 3, reps: '15',    weight: '12kg', intensity: 'Medium' },
  { name: 'Pushups',               sets: 3, reps: 'Failure',weight: 'Bodyweight', intensity: 'Low' },
]

function Workout() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [logs, setLogs] = useState([])        // saved workout logs from DB
  const [saving, setSaving] = useState(null)  // index of exercise being saved
  const [loadingLogs, setLoadingLogs] = useState(true)

  useEffect(() => {
    if (!user) { navigate('/auth'); return }
    getWorkoutsAPI()
      .then(r => setLogs(r.data.data))
      .catch(() => {})
      .finally(() => setLoadingLogs(false))
  }, [user])

  const handleFinish = async (ex) => {
    setSaving(ex.name)
    try {
      const res = await logWorkoutAPI({
        exerciseName: ex.name,
        duration: ex.sets * 3,           // rough estimate: 3 min per set
        caloriesBurned: ex.sets * 15,    // rough estimate
        intensity: ex.intensity,
      })
      setLogs(prev => [res.data.data, ...prev])
    } catch {
      alert('Could not save workout. Are you logged in?')
    } finally {
      setSaving(null)
    }
  }

  const handleDelete = async (id) => {
    await deleteWorkoutAPI(id)
    setLogs(prev => prev.filter(l => l._id !== id))
  }

  return (
    <div className="min-h-screen py-10 px-6 font-['Candara']">
      <div className="max-w-4xl mx-auto">

        {/* ── Today's plan ─────────────────────────────────── */}
        <header className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-stone-800">Today's Workout</h1>
            <p className="text-stone-500">Push Day — Focus on Chest & Triceps</p>
          </div>
          <div className="badge badge-primary p-4 bg-blue-200 border-none text-black font-bold">
            Push Day
          </div>
        </header>

        <div className="space-y-4">
          {DEFAULT_EXERCISES.map((ex, index) => (
            <div key={index} className="collapse collapse-arrow bg-white border border-stone-200 shadow-sm">
              <input type="radio" name="workout-accordion" defaultChecked={index === 0} />
              <div className="collapse-title text-xl font-medium flex justify-between items-center pr-12">
                <span>{ex.name}</span>
                <span className="text-sm text-stone-400 font-normal">{ex.sets} Sets × {ex.reps}</span>
              </div>
              <div className="collapse-content">
                <div className="overflow-x-auto">
                  <table className="table table-zebra">
                    <thead>
                      <tr><th>Set</th><th>Weight</th><th>Reps</th><th>Done</th></tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: ex.sets }).map((_, i) => (
                        <tr key={i}>
                          <th>{i + 1}</th>
                          <td>{ex.weight}</td>
                          <td>{ex.reps}</td>
                          <td><input type="checkbox" className="checkbox checkbox-success checkbox-sm" /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  onClick={() => handleFinish(ex)}
                  disabled={saving === ex.name}
                  className="btn btn-sm btn-neutral mt-3"
                >
                  {saving === ex.name ? 'Saving…' : 'Log this exercise'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Workout history ───────────────────────────────── */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Recent Logs</h2>
          {loadingLogs ? (
            <span className="loading loading-spinner"></span>
          ) : logs.length === 0 ? (
            <p className="text-stone-400">No workouts logged yet. Finish an exercise above!</p>
          ) : (
            <div className="space-y-3">
              {logs.map(log => (
                <div key={log._id} className="flex justify-between items-center bg-white border border-stone-200 rounded-xl px-5 py-3 shadow-sm">
                  <div>
                    <p className="font-semibold text-stone-800">{log.exerciseName}</p>
                    <p className="text-sm text-stone-400">
                      {log.duration} min · {log.caloriesBurned} kcal · {log.intensity} intensity
                    </p>
                  </div>
                  <button onClick={() => handleDelete(log._id)} className="btn btn-ghost btn-xs text-error">Remove</button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default Workout
